import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
    const subHandler = () => {
        console.log('OK');
    };

    return <NewMeetupForm onAddMeetup={subHandler} />;
};

export default NewMeetupPage;
