import React, { useContext } from "react";
import "./Admin.scss";
import contactImg from "../Assets/flaticons/contactImg.png";
import inquiryImg from "../Assets/flaticons/inquiryImg.png";
import newsletter from "../Assets/flaticons/newsletter.png";
import passports from "../Assets/flaticons/pass.png";
import MyContext from "../Common/Context/MyContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Admin = () => {
    const {
        contacts,
        inquiries,
        newsletters,
        passportData,
        save,
        setSave,
        deleteContactById,
        deleteInquiryById,
        deleteNewsLetterById,
        deletePassportById,
        findPById,
        // setUpdateTableData,

    } = useContext(MyContext);

    return (
        <div className="admin-page">
            <div className="admin-main">
                <div className="navigation">
                    <div className="navigation-container">
                        <div className="n-heading">
                            <h3>Veer Consultancy</h3>
                        </div>
                        <div className="n-item" onClick={() => setSave("contact")}>
                            <img src={contactImg} alt="" />
                            <span>Contact Us</span>
                        </div>
                        <div className="n-item" onClick={() => setSave("inquiry")}>
                            <img src={inquiryImg} alt="" />
                            <span>Inquiries</span>
                        </div>
                        <div className="n-item" onClick={() => setSave("newsletter")}>
                            <img src={newsletter} alt="" />
                            <span>Newsletter</span>
                        </div>
                        <div className="n-item" onClick={() => setSave("passport")}>
                            <img src={passports} alt="" />
                            <span>PassportData</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {save === "contact" && (
                        <div className="table-container">
                            <h3>Contact</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>

                                {contacts.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.message}</td>
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteContactById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}
                    {save === "inquiry" && (
                        <div className="table-container">
                            <h3>Inquiries</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>MobileNo</th>
                                    <th>VisaType</th>
                                    <th>Country</th>
                                    <th>Actions</th>
                                </tr>

                                {inquiries.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.mobileNo}</td>
                                            <td>{item.visaType}</td>
                                            <td>{item.country}</td>

                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteInquiryById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}

                    {save === "newsletter" && (
                        <div className="table-container">
                            <h3>Newsletters</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>

                                {newsletters.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteNewsLetterById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}

                    {save === "passport" && (
                        <div className="table-container">
                            <h3>PassportVerify</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>BirthPlace</th>
                                    <th>EmployeementType</th>
                                    <th>Proffession</th>
                                    <th>Education</th>
                                    <th>PoliceStation</th>
                                    <th>Actions</th>
                                </tr>

                                {passportData.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.birthPlace}</td>
                                            <td>{item.employeementType}</td>
                                            <td>{item.proffession}</td>
                                            <td>{item.education}</td>
                                            <td>{item.policeStation}</td>

                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deletePassportById(item._id)}
                                                        />
                                                    </div>
                                                    <div className="modify-btn">
                                                        <FaEdit
                                                            size={"23px"}
                                                            onClick={() => {
                                                                findPById(item._id)

                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;