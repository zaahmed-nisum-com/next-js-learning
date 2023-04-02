import Table from "../../components/table";
import Button from "../../components/button";

function AboutUs() {
    return (  
        <div>
            <p>About us</p>
            <Button title="click"/>
            <Table users={[
                {name:'Zain Ahmed',email:'zain@gmail.com',number:'03022400023,'},
                {name:'Faraz Ahmed',email:'faraz@gmail.com',number:'03022400023'},
               { name:'Arsalan Ahmed',email:'arsalan@gmail.com',number:'03022400023'}
            ]}/>
            <div>
                <p>working</p>
            </div>
        </div>
    );
}

export default AboutUs;