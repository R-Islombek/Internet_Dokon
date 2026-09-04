import Hero from '../../components/Hero/Hero';
import Deliver from '../../components/Deliver/Deliver';
import ComponentsCard from "../../components/ComponentsCard/ComponentsCard";
import Sales from '../../components/Sales/Sales';
import Latests from '../../components/Latests/Latests';
import Slider from '../../components/Slider/Slider';
import Form from "../../components/Form/Form";
import Shops from "../../components/Shops/Shops"

const Home = () => {
    return (
        <div>
            <Hero />
            <Deliver />
            <ComponentsCard />
            <Sales />
            <Latests />
            <Slider />
            <Form/>
            <Shops/>
        </div>
    )
}

export default Home
