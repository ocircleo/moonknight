import React, { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';

const Whishlight = () => {
    const { userDB } = useContext(Authcontext)
    console.log(userDB)
    return (
        <div>
            Whishlight
        </div>
    );
};

export default Whishlight;