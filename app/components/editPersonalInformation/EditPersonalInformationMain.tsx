import { FormData } from "../../constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function EditPersonalInformationMain({
  EmployeeId,
  setData,
}: {
  EmployeeId: string;
  setData: any;
}) {
  const [employeeData, setEmployeeData] = useState<FormData>();
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(employees) && employees.length > 0) {
      const employee = employees.find((e: FormData) => e.id === EmployeeId);
      if (employee) {
        setEmployeeData({ ...(employee as FormData) });
      }
    }
  }, [employees]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmployeeData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData(employeeData);
  }, [employeeData, setData]);

  return (
    <>
      {employeeData && (
        <div className="text-white w-[100%] gap-3 flex flex-row flex-wrap mt-4">
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">First Name</h5>
            <input
              type="text"
              name="firstName"
              value={employeeData.firstName}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Last Name</h5>
            <input
              type="text"
              name="lastName"
              value={employeeData.lastName}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Mobile Number</h5>
            <input
              type="text"
              name="mobileNumber"
              value={employeeData.mobileNumber}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>

          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Email</h5>
            <input
              type="text"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Marital Status</h5>
            <input
              type="text"
              name="maritalStatus"
              value={employeeData.maritalStatus}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Gender</h5>
            <input
              type="text"
              name="gender"
              value={employeeData.gender}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Nationality</h5>
            <input
              type="text"
              name="nationality"
              value={employeeData.nationality}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Address</h5>
            <input
              type="text"
              name="address"
              value={employeeData.address}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">City</h5>
            <input
              type="text"
              name="city"
              value={employeeData.city}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">State</h5>
            <input
              type="text"
              name="state"
              value={employeeData.state}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col text-white bg-transparent space-y-2 p-2.5 border-secondry">
            <h5 className="text-lightWhite text-sm">Zip</h5>
            <input
              type="text"
              name="zip"
              value={employeeData.zip}
              onChange={handleChange}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
