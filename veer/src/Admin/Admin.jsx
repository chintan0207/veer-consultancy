import React, { useContext } from "react";
import "./Admin.scss";
import contactImg from "../Assets/flaticons/contactImg.png";
import inquiryImg from "../Assets/flaticons/inquiryImg.png";
import newsletter from "../Assets/flaticons/newsletter.png";
import passports from "../Assets/flaticons/pass.png";
import formDetailsImg from "../Assets/flaticons/pass.png";
import MyContext from "../Common/Context/MyContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import vlogo from "../Assets/logo.png"
const Admin = () => {

    const url = "http://localhost:3034/"

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
        deleteDetailsById,
        findPById,
        detailsData,
        updateById,
        setEditingId, setEditedData, editingId, editedData
        // setUpdateTableData,

    } = useContext(MyContext);

    return (
        <div className="admin-page">
            <div className="admin-main">
                <div className="navigation">
                    <div className="navigation-container">
                        <div className="n-heading">
                            <img src={vlogo} alt="" /> <h3>Veer Consultancy</h3>
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
                        <div className="n-item" onClick={() => setSave("details")}>
                            <img src={formDetailsImg} alt="" />
                            <span>Serviceform Details</span>
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
                                            <td>
                                                {editingId === item._id ? (
                                                    <input
                                                        type="text"
                                                        value={editedData.birthPlace}
                                                        onChange={(e) => setEditedData({ ...editedData, birthPlace: e.target.value })}

                                                    />
                                                ) : (
                                                    item.birthPlace
                                                )}
                                            </td>
                                            <td>{editingId === item._id ? (

                                                <select
                                                    value={editedData.employeementType}
                                                    onChange={(e) => setEditedData({ ...editedData, employeementType: e.target.value })}
                                                    name="employeementType" >
                                                    <option value="" label="Select Employeement type" />
                                                    <option value="Government" label="Government" />
                                                    <option value="Private" label="Private" />
                                                    <option value="Homemaker" label="Homemaker" />
                                                    <option value="Not Employed" label="Not Employed" />
                                                    <option value="Others" label="Others" />
                                                    <option value="Retired Goverment Servant" label="Retired Goverment Servant" />
                                                    <option value="Student" label="Student" />
                                                    <option value="Self-Employed" label="Self-Employed" />
                                                    <option value="Retired-Private Service" label="Retired-Private Service" />
                                                </select>
                                            ) : (
                                                item.employeementType
                                            )}</td>
                                            <td>{editingId === item._id ? (
                                                <input
                                                    type="text"
                                                    value={editedData.proffession}
                                                    onChange={(e) => setEditedData({ ...editedData, proffession: e.target.value })}

                                                />
                                            ) : (
                                                item.proffession
                                            )}</td>
                                            <td>{editingId === item._id ? (
                                                <input
                                                    type="text"
                                                    value={editedData.education}
                                                    onChange={(e) => setEditedData({ ...editedData, education: e.target.value })}

                                                />
                                            ) : (
                                                item.education
                                            )}</td>
                                            <td>{editingId === item._id ? (
                                                <input
                                                    type="text"
                                                    value={editedData.policeStation}
                                                    onChange={(e) => setEditedData({ ...editedData, policeStation: e.target.value })}

                                                />
                                            ) : (
                                                item.policeStation
                                            )}</td>

                                            <td>
                                                <div className="actions-btn">

                                                    {
                                                        editingId === item._id ?
                                                            <div className="update-btn">
                                                                <MdSaveAlt
                                                                    size={"25px"}
                                                                    onClick={() => updateById(item._id, editedData)}
                                                                />
                                                            </div> :
                                                            <>
                                                                <div className="delete-btn">
                                                                    <RiDeleteBin5Line
                                                                        size={"25px"}
                                                                        onClick={() => deletePassportById(item._id)}
                                                                    />
                                                                </div>


                                                                <div className="modify-btn">
                                                                    <FaEdit
                                                                        size={"25px"}
                                                                        onClick={() => {
                                                                            findPById(item._id)

                                                                        }}
                                                                    />
                                                                </div>
                                                            </>
                                                    }

                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}

                    {save === "details" && (
                        <div className="table-container">
                            <h3>Serviceform Details</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>ServiceType</th>
                                    <th>Name</th>
                                    <th>MotherName</th>
                                    <th>PlaceOfBirth</th>
                                    <th>Education</th>
                                    <th>EmployeementType</th>
                                    <th>Email</th>
                                    <th>MobileNo</th>
                                    <th>Alternative MobileNo</th>
                                    <th>PoliceStation</th>
                                    <th>IdentityProof</th>
                                    <th>BirthProof</th>
                                    <th>AddressProof</th>
                                    <th>Actions</th>
                                </tr>

                                {detailsData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.serviceType}</td>
                                            <td>{item.name}</td>
                                            <td>{item.motherName}</td>
                                            <td>{item.placeOfBirth}</td>
                                            <td>{item.education}</td>
                                            <td>{item.employeementType}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobileNo}</td>
                                            <td>{item.alterMobileNo}</td>
                                            <td>{item.policeStation}</td>
                                            <td><a target="_blank" rel="noreferrer" download="identity.jpg" href={url + item.identityProof}>IdentityProof</a></td>
                                            <td><a target="_blank" rel="noreferrer" href={url + item.birthProof}>BirthProof</a></td>
                                            <td><a target="_blank" rel="noreferrer" href={url + item.addressProof}>AddressProof</a></td>
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteDetailsById(item._id)}
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