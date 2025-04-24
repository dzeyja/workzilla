"use client";

import { Modal } from "shared/ui/Modal/Modal";
import { VacancyResponsesList } from "../VacancyResponsesList/VacancyResponsesList";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface VacancuResponseModalProps {
    isOpen: boolean
    onClose: () => void
    vacancyId: string
}

export const VacancuResponseModal = (props: VacancuResponseModalProps) => {
    const { isOpen, onClose, vacancyId } = props
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Text text={'Отклики на эту вакансию'} theme={TextTheme.PRIMARY}/>
            <VacancyResponsesList vacancyId={vacancyId} />
        </Modal>
    );
};