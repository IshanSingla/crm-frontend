import {messaging} from './firebase';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

export const FirebaseMessaging = () => {
    const location = useLocation();
    
    useEffect(() => {
        messaging
        .requestPermission()
        .then(() => {
            return messaging.getToken();
        })
        .then((token) => {
            Axios.post("https://crm-indusianassist.herokuapp.com/api/v1/notifications", {
            token: token,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, [location]);
    return null;
    }