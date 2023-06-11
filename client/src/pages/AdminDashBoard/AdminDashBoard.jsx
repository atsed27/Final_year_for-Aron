import React, { useEffect } from 'react'
import './AdminDashBoard.css'
import NavBar from "../../components/NavBar/NavBar";
import Users from "../../img/users.png"
import Adverts from "../../img/advert.png"
import discussion from "../../img/discussion.png"
import socialPosts from "../../img/socialPosts.png"
import DataTable from './Table';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/UserAction';
import { reducers } from '../../reducers';


const AdminDashBoard = () => {
    const {users, loading} = useSelector((state) =>state.usersReducer);
    const {adverts} = useSelector((state)=> state.advertReducer);
    const {posts} = useSelector((state)=> state.postReducer);
    const {questions} = useSelector((state)=> state.qaReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllUsers());
    },[])
    // const data = [
    //     { id: 1, username: 'john123', firstName: 'John', lastName: 'Doe', livesIn: 'New York', status: 'active', worksAt: 'ABC Corp' },
    //     { id: 2, username: 'jane456', firstName: 'Jane', lastName: 'Smith', livesIn: 'Los Angeles', status: 'inactive', worksAt: 'XYZ Inc' },
    //     { id: 3, username: 'bob789', firstName: 'Bob', lastName: 'Johnson', livesIn: 'Chicago', status: 'inactive', worksAt: 'LMN Co' },
    //     { id: 4, username: 'dave', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 5, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 6, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 7, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 8, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 9, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 10, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 11, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 12, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 13, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },
    //     { id: 14, username: 'sue101', firstName: 'Sue', lastName: 'Williams', livesIn: 'Seattle', status: 'active', worksAt: 'PQR Ltd' },

    //   ];
  return (
    <>
      <NavBar />
     <div class="main-container">
        <div class="navcontainer">
            <nav class="nav">
                <div class="nav-upper-options">
                    <div class="nav-option option1">
                        <img src={Users}
                            class="nav-img"
                            alt="dashboard"/>
                        <h3> Users</h3>
                    </div>
 
                    <div class="option2 nav-option">
                        <img src={Adverts}
                            class="nav-img"
                            alt="articles"/>
                        <h3> Adverts</h3>
                    </div>
 
                    <div class="nav-option option3">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                            class="nav-img"
                            alt="report"/>
                        <h3> Report</h3>
                    </div>
 
                    <div class="nav-option option5">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                            class="nav-img"
                            alt="blog"/>
                        <h3> Q&A categories</h3>
                    </div>

 
                </div>
            </nav>
        </div>
        <div class="main">
            <div class="box-container">
 
                <div class="box box1">
                    <div class="text">
                        <h2 class="topic-heading">{users?.length}</h2>
                        <h2 class="topic">Total Users</h2>
                    </div>
 
                    <img src={Users}

                        alt="users"/>
                </div>
 
                <div class="box box2">
                    <div class="text">
                        <h2 class="topic-heading">{adverts?.length}</h2>
                        <h2 class="topic">Advertisements</h2>
                    </div>
 
                    <img src={Adverts}
                         alt="adverts"/>
                </div>
 
                <div class="box box3">
                    <div class="text">
                        <h2 class="topic-heading">{posts?.length}</h2>
                        <h2 class="topic">Social Posts</h2>
                    </div>
 
                    <img src={socialPosts}
                        alt="posts"/>
                </div>
 
                <div class="box box4">
                    <div class="text">
                        <h2 class="topic-heading">{questions?.length}</h2>
                        <h2 class="topic">Q&A exchanges</h2>
                    </div>
 
                    <img src={discussion}
alt="published"/>
                </div>
            </div>
 
            <div class="report-container">
            <Table data={users} />
            </div>
        </div>
    </div>
    </>
   
    )
}

export default AdminDashBoard