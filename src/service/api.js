import API from '../utils/http'
//获取当前省市
export const getCurrentCity = (params)=>API.get('/postion/parking/search',{params});

//坐标系转换

export const transformPostion = (params)=>API.get('/postion/geoconv/v1',{params});