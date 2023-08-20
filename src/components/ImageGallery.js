import { ImageGalleryItem } from "./ImageGalleryItem"

export const ImageGallery=({images})=>{
    return(
        <ul>
            {images.map(image=>{
                return <li key={image.id}>
                    <ImageGalleryItem images={image.webformatURL}/>
                </li>
            })}
        </ul>
    )
}