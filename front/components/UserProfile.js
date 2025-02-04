// front/components/userProfile.js
import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">짹짹 <br /> 0 </div>,
                <div key="followings">팔로잉 <br /> 0 </div>,
                <div key="followers">팔로워 <br /> 0 </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>ZC</Avatar>} title="정민성" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;