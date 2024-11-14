import React, {useState, useEffect} from 'react';
import { useProduductContext } from '../Contaxt/ProductContext';


const MyImage = ({ image }) => {

    const {setCurrentImg} = useProduductContext();

    const [img, setImg] = useState(image[0]);

    useEffect(() => {
        setCurrentImg(img);
    }, [img])
    
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="row center imgsection">
                    {
                        image.map((curElr, index) => {
                            return (
                                <figure key={index} onClick = {()=>setImg(curElr)} className ="myImg">
                                    <img src={curElr.url} alt={curElr.filename} className="img-fluid" />
                                </figure>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <figure>
                        <img src={img.url} alt={img.filename} className="img-fluid img-main" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default MyImage