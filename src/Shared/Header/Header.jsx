import React from 'react';
import useTitle from '../../components/Hooks/useTitle';

const Header = () => {
    useTitle('Header');
    return (
        <div>
            This is Header
        </div>
    );
};

export default Header;