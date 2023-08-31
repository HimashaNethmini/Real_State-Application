import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";
import { Button, Group } from "@mantine/core";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const widgetRef = useRef(null); // Initialize with null

  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  useEffect(() => {
    // Load Cloudinary script and wait for it to be ready
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js"; // Change the URL if needed
    script.async = true;
    script.onload = () => {
      // Cloudinary library is now loaded
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: "dcdhklrjc",
          uploadPreset: "vx0dyjgc",
          maxFiles: 1,
        },
        (err, result) => {
          if (!err && result && result.event === "success") {
            setImageURL(result.info.secure_url);
          }
        }
      );
    };
    document.body.appendChild(script);

    // Clean up the script tag on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div
          className="flexColCenter uploadZone"
          onClick={() => widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div
          className="uploadedImage"
          onClick={() => widgetRef.current?.open()}
        >
          <img src={imageURL} alt="" />
        </div>
      )}

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageURL}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
