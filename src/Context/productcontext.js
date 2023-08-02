/*-we need to create three things to use context 
	it has three components 
	1.context -- similar to shopkeeper
	2.provider -- similar to delivery boy
	3.consumer -- similar to consumer (particular pages act as a consumer) 
-*/

import { createContext, useContext, useEffect } from "react";
import axios from "axios";


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {

	const getProducts = async (url) => {
		const res = await axios.get(url);
		const products = await res.data;
		console.log(res)
		console.log("products:",products);
	};

	useEffect(()=>{
		getProducts(API);
	},[])

	return (
		<AppContext.Provider value={{myName: "Aniket Singh"}}>
			{children}
		</AppContext.Provider>
	)
}

//custom hooks for particular page

const useProductContext = () =>{
	return useContext(AppContext);
};

export {AppProvider, AppContext, useProductContext};