import { useEffect } from "react"
import { getAllData } from "./HomeSlice"
import { useDispatch, useSelector } from "react-redux"
import "./Home.css"
import { Link } from "react-router-dom"


const Home = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log({ loading, data });

    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <>
            <Link to={'/login'}>
                <button>login here</button>
            </Link>
            <h1>all products</h1>
            <div className="grid">
                {loading ?
                    <img src={require('./images/loader.gif')} />
                    :
                    data?.products?.length > 0 ?
                        data?.products?.map((product, index) => (
                            <span className="gallery" key={index}>
                                 <div className="content ">
                                     <img src={product.thumbnail} alt="smartwatch" />
                                     <h3>{product.title}</h3>
                                     <p>{product.description}</p>
                                     <del>${product.price}</del><h6>${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</h6>
                                 </div>
                             </span>
                        ))
                        :
                        <div>
                            <center>no data found</center>
                        </div>
                }
            </div>
        </>
    )
//     return (
//         <>
//             <div className="gallery">
//                 {loading ? <h1>Loading...</h1>
//                     : data?.products?.length > 0 ?
//                         data?.products?.map((product, idx) => (
//                             <span className="" key={idx}>
//                                 <div className="content ">
//                                     <img src={product.thumbnail} alt="smartwatch" />
//                                     <h3>{product.title}</h3>
//                                     <p>{product.description}</p>
//                                     <del>${product.price}</del><h6>${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</h6>
//                                 </div>
//                             </span>
//             ))
//             : <div><center>No data found</center></div>
//                 }
//         </div >
//         </>

//     )
}

export default Home