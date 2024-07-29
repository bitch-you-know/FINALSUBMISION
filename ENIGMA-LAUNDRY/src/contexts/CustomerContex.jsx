import React, { createContext, useState, useEffect } from 'react';
import { axiosinstance } from '../lib/axios';
import { useSelector } from 'react-redux';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const [customers, setCustomers] = useState([]);

  const getListCustomers = async () => {
    try {
      const result = await axiosinstance.get('/customers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCustomers(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getListCustomers();
  }, [token]);

  return (
    <CustomerContext.Provider value={{ customers, getListCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const customerContext = () => React.useContext(CustomerContext);
