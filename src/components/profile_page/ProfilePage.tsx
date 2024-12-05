import React, { useEffect, useState } from "react";
import NavbarLogin from "../common/NavbarLoginPage";
import "../../css/profile_page/ProfilePage.css";
import axios from "axios";

const ProfilePage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const profileInfo = {
    dateCreated: "Placeholder value",
    numberOfProjects: "Placeholder value",
    otherInfo: "Placeholder value",
  };

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/user/getImage",
          {
            withCredentials: true,
            responseType: "blob",
          }
        );

        const imageUrl = URL.createObjectURL(response.data);
        setProfileImage(imageUrl);
      } catch (error) {
        console.error("Error fetching profile image:", error);
        setProfileImage(null);
      }
    };

    fetchProfileImage();
  }, []);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/user/uploadImage",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="profile-page">
      <NavbarLogin currentPage="login" />
      <div className="main-content">
        <div className="top-half">
          <div className="profile-picture-section">
            <label htmlFor="profile-upload" className="profile-img-label">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-img" />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile Placeholder"
                  className="profile-img"
                />
              )}
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
              disabled={uploading}
            />
            {uploading && <p>Uploading...</p>}
          </div>
          <div className="profile-info-section">
            <h2>Your Profile</h2>
            <div className="info-item">
              <strong>Date Created:</strong> {profileInfo.dateCreated}
            </div>
            <div className="info-item">
              <strong>Number of Projects:</strong>{" "}
              {profileInfo.numberOfProjects}
            </div>
            <div className="info-item">
              <strong>Other Info:</strong> {profileInfo.otherInfo}
            </div>
          </div>
        </div>

        <div className="bottom-half">
          <h3>Your Projects</h3>
          <div className="project-placeholder">
            <p>Placeholder for project 1</p>
          </div>
          <div className="project-placeholder">
            <p>Placeholder for project 2</p>
          </div>
          <div className="project-placeholder">
            <p>Placeholder for project 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
