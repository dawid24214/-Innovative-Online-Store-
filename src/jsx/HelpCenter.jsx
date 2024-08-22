import '../scss/elements/_helpcenter.scss';
import {useState} from "react";

function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) =>{
      const file = event.target.files[0];
      if (file){
          const reader = new FileReader();
          reader.onloadend = () =>{
              set
          }
      }
  }
}
