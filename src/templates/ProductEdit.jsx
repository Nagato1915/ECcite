import React, {useState, useCallback, useEffect} from 'react';
import {Textarea, TextInput, SelectBox, PrimaryButton} from '../components/UIkit';
import {useDispatch} from 'react-redux';
import {saveProduct} from '../reducks/products/operations';
import {ImageArea, SetSizeArea} from '../components/Products';
import {db} from '../firebase/index';

const ProductEdit = () => {
  const dispatch = useDispatch();

  let id = window.location.pathname.split("/product/edit")[1];
  
  if (id !== "") {
    id = id.split("/")[1];
  }

  const [name, setName] = useState(""),
        [description, setDescription] = useState(""),
        [category, setCategory] = useState(""),
        /*[categories, setCategories] = useState([]),*/
        [gender, setGender] = useState(""),
        [images, setImages] = useState([]),
        [price, setPrice] = useState(""),
        [keywords, setKeywords] = useState([]),
        [isRecommend, setIsRecommend] = useState(false),
        [sizes, setSizes] = useState([]);

const inputName = useCallback((e) => {
    setName(e.target.value)
}, [setName]);

const inputDescription = useCallback((e) => {
  setDescription(e.target.value)
}, [setDescription]);

const inputPrice = useCallback((e) => {
  setPrice(e.target.value)
}, [setPrice]);

const inputKeywords = useCallback((e) => {
  setKeywords(e.target.value)
}, [setKeywords])

const changeRec = useCallback(() => {
  setIsRecommend(!isRecommend)
  console.log(isRecommend)
}, [setIsRecommend])


const sex = [
  {id: "all", name: "ALL"},
  {id: "male", name: "MALE"},
  {id: "female", name: "FEMALE"},
]

const categories = [
  {id: "tops", name: "TOPS", order: "0001"},
  {id: "bottoms", name: "BOTTMS", order: "0002"},
  {id: "outer", name: "OUTER", order: "0003"},
  {id: "setup", name: "SETUP", order: "0004"},
  {id: "goods", name: "GOODS", order: "0005"},
]

useEffect(() => {
  if (id !== "") {
    db.collection('products').doc(id).get()
      .then(snapshot => {
        const data = snapshot.data();
         setName(data.name);
         setDescription(data.description);
         setCategory(data.category);
         setGender(data.gender);
         setImages(data.images);
         setPrice(data.price);
         setKeywords(data.keyword);
         setIsRecommend(data.recommend);
         setSizes(data.sizes);
      })
    }
},[id]);

/*useEffect(() => {
  db.collection("categories").orderBy("order", "asc").get().then(snapshots => {
    const list  = [];
    snapshots.forEach(snapshot => {
    const data = snapshot.data();
     list.push({
        id: data.id,
        name: data.name
      })
    })
    setCategories(list)
  })
}, []) */

  return(
    <section>
      <h2 className="page-ttl">商品の登録・編集</h2>
      <div className="page-container">
        <ImageArea images={images} setImages={setImages}/>
        <TextInput 
         label={"商品名"} rows={1} type={"text"} required={true} value={name} onChange={inputName} 
        />
        <Textarea label={"商品説明"} required={true} value={description} rows={5} onChange={inputDescription} />
        <SelectBox 
          label={"カテゴリー"} required={true} options={categories} value={category} select={setCategory}
        />
         <SelectBox 
          label={"性別"} required={true} options={sex} value={gender} select={setGender}
        />
        <TextInput 
          label={"価格"} type={"number"} required={true} value={price} onChange={inputPrice} 
        />
        <TextInput
          label={"キーワード"} type={"text"} required={true} value={keywords} onChange={inputKeywords} 
        />
        <TextInput
          label={"おすすめ"} type={"checkbox"} required={true} value={isRecommend} onChange={changeRec} cheked={isRecommend ? true : false}
        />
         
        
         <div className="module-spacer--small" />
         <SetSizeArea sizes={sizes} setSizes={setSizes} />
         <div className="module-spacer--small" />
         <div className="center">
         <PrimaryButton 
           label={"商品情報を登録"}
           onClick={() => dispatch(saveProduct(id, name, description, category, gender, price, keywords, images, isRecommend ,sizes))}
         />
         </div>
      </div>
    </section>
  )
}

export default ProductEdit;