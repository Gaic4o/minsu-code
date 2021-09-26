import { CreateModel, CloseModalButton } from '@components/Modal/styles';
import React, { FC, useCallback } from 'react';


interface Props {
    show: boolean;
    onCloseModal: () => void;
}

const Model: FC<Props> = ({ show, children, onCloseModal }) => {
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, []);

    if (!show) {
        return null;
    }

    return (
        <CreateModel onClick={onCloseModal}>
            <div onClick={stopPropagation}>
            <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
            {children}
            </div>
        </CreateModel>
    );
}

export default Model;