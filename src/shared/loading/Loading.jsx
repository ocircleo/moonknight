
import loading from './loading.module.css'
// eslint-disable-next-line react/prop-types
const Loading = ({ para }) => {
    return (
        <div className={`${loading.cont} ${para? 'h-screen' : ''}`}>
            <div className={loading.con}>
                <div className={`${loading.ff} ${loading.ro} `}></div>
                <div className={`${loading.ffs} ${loading.ro}`}></div>
                <div className={`${loading.ffd} ${loading.ro}`}></div>
            </div>
        </div >
    );
};

export default Loading;