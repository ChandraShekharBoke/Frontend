// import { useEffect, useState } from "react";
// import { getContactInfo } from "./services/contactService";
// import "./style/Contact.css";

// const Contact = () => {
//   const [contactInfo, setContactInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getContactInfo();
//         setContactInfo(data);
//       } catch (error) {
//         console.error("Contact fetch error:", error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

//   return (
//     <div className="contact-page">

//       <h2 className="contact-title">Contact Us</h2>

//       <div className="contact-cards">

//         <div className="contact-card">
//           <div className="icon">✅</div>
//           <h4>Registered Office</h4>
//           <p>{contactInfo?.address}</p>
//         </div>

//         <div className="contact-card">
//           <div className="icon">✅</div>
//           <h4>Phone</h4>
//           <p>{contactInfo?.phone}</p>
//         </div>

//         <div className="contact-card">
//           <div className="icon">✅</div>
//           <h4>Email</h4>
//           <p>{contactInfo?.email}</p>
//         </div>

//       </div>

//     </div>
//   );
// };


// export default Contact;


import { useEffect, useState } from "react";
import { getContactInfo } from "./services/contactService";
import "./style/Contact.css";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContactInfo();
        setContactInfo(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-cards">
        <div className="contact-card">
          <h4>Registered Office</h4>
          <p>{contactInfo?.address}</p>
        </div>

        <div className="contact-card">
          <h4>Phone</h4>
          <p>{contactInfo?.phone}</p>
        </div>

        <div className="contact-card">
          <h4>Email</h4>
          <p>{contactInfo?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;