// import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';
const MeetupDetails = () => {
    const router = useRouter();
    const id = router.query.meetId;

    return (
        <MeetupDetail
            img='https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            title='Now now'
        />
    );
};

export default MeetupDetails;
