import { StyledBurgerButton } from './navbar.styles';
import { useSidebarContext } from '@/provider/layout-context';

export const BurguerButton = () => {
    const { setCollapsed } = useSidebarContext();
    return (
        <div className={StyledBurgerButton()} onClick={setCollapsed}>
            <div />
            <div />
        </div>
    );
};
