import React, { useEffect } from 'react'
import Conteiner from '../Style/Conteiners.module.css'
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
// import ErrorPage from '../../../../Components/ErrorPage/errorPage'
import OrderTable from '../../Components/OrderTable/OrderTable'
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import { getUserLog } from '../../../../libs/redux/features/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const Orders = () => {
  const order = useSelector(state => state.request.allRequest);
  const { data } = useGetAllRequestQuery();
  const dispatch = useDispatch();


  return (
    <div className={Conteiner.Container}>
      <NavBarAdmin />
      <div className={Conteiner.Panel}>
       <OrderTable/>
      </div>
    </div>
  )
}

export default Orders