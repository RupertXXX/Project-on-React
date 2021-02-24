import React from 'react';
import Counter from './counter/counter';
import Onefriend from './onefriend/onefriend';
import c from './friends.module.css';

const FriendsFunc = (props) => {
    // let [friedsUsersToggle, setFriedsUsersToggle] = useState(true);

    let makeArrayAllUsers = () => {
        let friendsAllUsersData_is = props.friendsAllUsers.map (obj => 
            <Onefriend name={obj.name} 
                followed={obj.followed} 
                photos={obj.photos} 
                key={obj.id} 
                id={obj.id} 
                friendsFollowInProgress={props.friendsFollowInProgress} 
                followFriend={props.followFriend} 
                unfollowFriend={props.unfollowFriend} 
            />);
        return friendsAllUsersData_is;
    }

    // let makeArrayFriends = () => {
    //     let friendsAllUsersData_is = props.friends.map (obj => 
    //         <Onefriend name={obj.name} 
    //             followed={obj.followed} 
    //             photos={obj.photos} 
    //             key={obj.id} 
    //             id={obj.id} 
    //             friendsFollowInProgress={props.friendsFollowInProgress} 
    //             followFriend={props.followFriend} 
    //             unfollowFriend={props.unfollowFriend} 
    //         />);
    //     return friendsAllUsersData_is;
    // }

    return(
        <div className={c.friends_main}>
            <div className={c.counter_btn}>
                <div className={c.counter}>
                    <Counter currentPage={props.currentPage} 
                             totalFriendsCount={props.totalFriendsCount}
                             pageSize={props.pageSize}
                             newRequestOnClick={props.newRequestOnClick} 
                             portionSize={10} />
                </div>
                {
                    // friedsUsersToggle
                    // ?
                    //     <button className={c.btn} onClick={() => setFriedsUsersToggle(prev => !prev)}>
                    //         All users 
                    //     </button>
                    // :
                    //     <button className={c.btn} onClick={() => setFriedsUsersToggle(prev => !prev)}>
                    //         Only friends
                    //     </button>
                }
            </div>
            {
                // friedsUsersToggle
                // ?
                //     makeArrayFriends()
                // :
                makeArrayAllUsers() /* <Onefriend /> */
            }
        </div>
    );
}

export default FriendsFunc;