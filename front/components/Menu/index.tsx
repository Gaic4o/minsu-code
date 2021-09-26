import React, { CSSProperties, FC, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
    show: boolean,
    onCloseModal: (e: any) => void;
    style: CSSProperties;
    closeButton?: boolean;
}

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {

    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, [])

    if (!show) return null;

    return (
        <CreateMenu onClick={onCloseModal}>
            {/* div 를 클릭했지만 CreateMenu onClick 도 같이 실행됩나다. 
            근데 여기 클릭했을 떄 Model 되니까 모델이 닫어 버림 막아주는 방법 
            stopPro.. 해주면 버블링이 안됩니다.*/}
            <div style={style} onClick={stopPropagation}> 
                {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
                {children}
                </div>
        
        </CreateMenu>
    );
};

export default Menu;