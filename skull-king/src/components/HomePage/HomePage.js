import { Link, useNavigate } from 'react-router-dom';
import View from '../UI/View/View';
import TitleHeader from '../UI/TitleHeader/TitleHeader';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <View>
            <TitleHeader>Skull King</TitleHeader>
        </View>
    );
};

export default HomePage;
