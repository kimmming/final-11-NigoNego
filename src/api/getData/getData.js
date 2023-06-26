import styled from "styled-components";
import { getDataBase } from "../Api";

// export const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';


// homepost
export const GetHomePostData = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/post/nigonego/userpost`)
    return response
  } catch (err) {
    console.log("오류")
  }
};

export const GetHomeFeedData = async () => {
  try {
    // id부분 props 로 재작업하기
    
    const response = await getDataBase.get(`/post/feed`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



// homepost
export const GetMyProfileData = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/profile/nigonego`)
    return response
  } catch (err) {
    console.log("오류")
  }
};




// // 팔로워, 팔로잉 리스트
// export const GetFollowerData = async (getData) => {
//   try {
//     // id부분 props 로 재작업하기
//     // const res = await getDataBase.get(`/post/${id}`);
//     const response = await getDataBase.get(`/profile/nigonego/${getData}`)
//     return response
//   } catch (err) {
//     console.log("오류")
//   }
// };



// 팔로워, 팔로잉 리스트
export const GetFollowerData = async (accountname,getData) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/profile/${accountname}/${getData}`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



// 리스트 고치기
// 내 상품리스트 무한스크롤 가져오기
export const GetProDuctListLimit = async (skip,accountname) => {
  try {
    // const response = await getDataBase.get(`/product/nigonego/?limit=5&skip=${skip}`)
    const response = await getDataBase.get(`/product/${accountname}/?limit=5&skip=${skip}`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



// 포스트 무한스크롤 가져오기
export const GetPostListLimit = async (skip,accountname) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    // const response = await getDataBase.get(`/product/${accountName}/?limit=${limit}&skip=${skip}`)

    // const response = await getDataBase.get(`/post/nigonego/userpost/?limit=2&skip=${skip}`)
    const response = await getDataBase.get(`/post/${accountname}/userpost/?limit=2&skip=${skip}`)
    return response
  } catch (err) {
    console.log("오류")
  }
};







// 무한 스크롤 컴포넌트


// function ScrollEvent(width){
// <Div width={width}/>

// }




// const Div = styled.div`

// width: ${props=>props.width}


// `











// 복붙코드 

// const homePost = () => {
  
// try {
//   axios({
//     method: 'GET',
//     url: `https://api.mandarin.weniv.co.kr/post/nigonego/userpost`,

//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-type': 'application/json',
//     },
//   }).then(response => {
//     setUserData(response.data.post);
//     // console.log(userData);
//   });
// } catch (err) {
//   console.log('에러');
// }
// }