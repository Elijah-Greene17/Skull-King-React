import { Link, useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import Label from '../UI/Label/Label';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <MainView>
            <TitleHeader>Skull King</TitleHeader>
            <Label>Enter your name</Label>
            <Input value="Elijah" />
            <Button>PLAY</Button>
        </MainView>
    );
};

export default HomePage;
