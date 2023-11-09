import React, { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';

const Whishlist = () => {
    const { userDB } = useContext(Authcontext)
    console.log(userDB)
    return (
        <div>
            Whishlight
        </div>
    );
};

export default Whishlist;