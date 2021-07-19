import React, { useContext } from "react";
import Switch from 'react-switch'; 
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container } from './style';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <strong>Hello World</strong>
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.3, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    );
};

export default Header;