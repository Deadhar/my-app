
const currentTime = new Date().getHours();

const Greeting = (props) => {
    const { name } = props;
    if (currentTime>=6 && currentTime <= 12 ){
        return <div>Доброе утро {name}</div>
    }
    else if (currentTime>12 && currentTime <18){
        return <div>Добрый день {name}</div>
    }
    else if (currentTime>18 || currentTime <6){
        return <div>Добрый вечер {name}</div>
    }
};
export default Greeting