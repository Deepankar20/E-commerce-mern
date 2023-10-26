import React, { useRef, useState } from "react";
import { storage } from "../firebase";
import axios from "axios";

import {
  StringFormat,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { Navigate } from "react-router-dom";

export const AddProduct = () => {
  const userRef = JSON.parse(localStorage.getItem("token"))._id;
  const [imageUploadError, setImageUploadError] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    images: [],
    userRef: userRef,
  });

  const [loading, setLoading] = useState(false);

  const handleUploadImages = () => {
    if (files.length > 0 && files.length + formData.images.length < 7) {
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          const updatedImages = formData.images.concat(urls);
          setFormData({
            ...formData,
            images: updatedImages,
          });
          setImageUploadError(false);
        })
        .catch((error) => {
          // Handle the error here
          console.error("Error uploading images:", error);
          setImageUploadError("Image upload failed");
          // You might want to set an error state or display a message to the user.
        });
    } else {
      setImageUploadError("You can only upload 6 images at max");
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data  = await axios
        .post("/api/product/add", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
      Navigate()
      console.log(data.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

        <h1 className="text-center font-bold text-4xl p-3">Add Your Product</h1>
    
    <form
      className="p-3 flex mx-auto justify-between gap-5"
      onSubmit={handleFormSubmit}
    >
      <div className="p-3 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-5 ">
          <label htmlFor="">Name: </label>
          <input
            name="name"
            type="text"
            placeholder="product name"
            className="p-3 border border-yellow-500 rounded-lg w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <label htmlFor="">Description: </label>
          <textarea
            name="description"
            type="textarea"
            placeholder="product description"
            className="p-3 border border-yellow-500 rounded-lg w-full h-80"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <label htmlFor="">Category: </label>
          <input
            name="category"
            type="text"
            placeholder="product category"
            className="p-3 border border-yellow-500 rounded-lg w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Price: </label>
          <input
            name="price"
            type="number"
            placeholder="product price"
            className="p-3 border border-yellow-500 rounded-lg w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Stock: </label>
          <input
            name="stock"
            type="number"
            placeholder="product stock"
            className="p-3 border border-yellow-500 rounded-lg w-full"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="p-3 w-full">
        <div>
          <label htmlFor="">Images : </label>
          <input
            type="file"
            onChange={(e) => {
              setFiles(e.target.files);
            }}
            multiple
          />

          <button
            type="button"
            onClick={handleUploadImages}
            className="p-3 text-green-700 border border-green-700 uppercase hover:shadow-lg disabled:opacity-80"
          >
            upload
          </button>
        </div>

        {formData.images.length > 0 &&
          formData.images.map((url, index) => {
            return (
              <div
                key={url}
                className="flex justify-between items-center p-3 border "
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  type="button"
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                >
                  Delete
                </button>
              </div>
            );
          })}

        <button
          type="submit"
          className="bg-yellow-500 p-2 border rounded-xl w-80 my-7"
        >
          {loading ? "ADDING..." : "ADD PRODUCT"}
        </button>
      </div>
    </form>
    </div>
  );
};
