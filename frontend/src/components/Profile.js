import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const profileId = queryParams.get("id");

    // Fetch profile data from backend
    fetch(`http://localhost:5000/profile?id=${profileId}`)
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Error fetching profile: ", err));
  }, []);

  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                {/* Profile Image Section */}
                <div className="col-12 col-md-5 d-flex align-items-center justify-content-center p-4">
                  {profileData?.image ? (
                    <img
                      src={`http://localhost:5000/images/${profileData.image.split("/").pop()}`}
                      alt={profileData.name}
                      className="img-fluid rounded-circle shadow-sm"
                      style={{ maxWidth: "200px", height: "200px", objectFit: "cover" }}
                    />
                  ) : (
                    <div className="spinner-border text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </div>

                {/* Profile Details Section */}
                <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
                  <div className="card-body p-4 p-md-5">
                    {profileData ? (
                      <>
                        <div className="text-center mb-4">
                          <h2 className="h4">Welcome, {profileData.name}!</h2>
                        </div>
                        <div className="mb-3">
                          <p className="fs-5 mb-1">
                            <strong>Email:</strong> {profileData.email}
                          </p>
                          <p className="fs-5 mb-1">
                            <strong>Phone:</strong> {profileData.phone || "N/A"}
                          </p>
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-dark btn-lg">
                            Edit Profile
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <p className="fs-5">Loading profile...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
