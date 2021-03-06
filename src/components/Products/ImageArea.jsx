import React, {useCallback} from 'react';
import {IconButton} from "@material-ui/core";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import {makeStyles} from "@material-ui/styles";
import {storage} from '../../firebase/index';
import ImagePreview from './ImagePreview'

const useStyle = makeStyles({
  icon: {
    height: 48,
    width: 48,
  }
})

const ImageArea = (props) => {
  const classes = useStyle();

  const deleteImage = useCallback((id) => {
    const ret = window.confirm("この画像を削除しますか？")
    if (!ret) {
      return false
    }else {
      const newImages = props.images.filter(image => image.id !== id);
      props.setImages(newImages);
      return storage.ref('images').child(id).delete()  
    }
  }, [props.images])

  const uploadImage = useCallback((e) => {
    const file = e.target.files;
    let blob = new Blob(file, {type: "image/jpeg"});

    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join("");

    const uploadRef = storage.ref('images').child(fileName);
    const uploadTask = uploadRef.put(blob);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newImage = {id: fileName, path: downloadURL};
        props.setImages((prevState => [...prevState, newImage]))
      });
    })
  }, [props.setImages]);



  return(
    <div>
      <div className="p-grid__list-images">
        {props.images.length > 0 && (
          props.images.map(image => <ImagePreview delete={deleteImage} id={image.id} path={image.path} key={image.id} />)
        )}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton className={classes.icon}>
          <label>
            <AddToPhotos />
            <input 
            className="u-display-none" type="file"
            onChange={(e) => uploadImage(e)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  )
}

export default ImageArea;