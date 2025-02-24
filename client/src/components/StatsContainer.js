import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import { StatItem } from "./index";

const StatsContainer = ({defaultStatus}) => {
    const stats = [
        {
            title: 'pending applications',
            count: defaultStatus?.pending || 0,
            icon: <FaSuitcaseRolling/>,
            color: '#f59e0b',
            bcg: '#fef3c7'
        },
        {
            title: 'interview scheduled',
            count: defaultStatus?.interview || 0,
            icon: <FaCalendarCheck/>,
            color: '#647acb',
            bcg: '#e0ea8f9'
        },
        {
            title: 'job declined',
            count: defaultStatus?.rejected || 0,
            icon: <FaBug/>,
            color: '#d66a6a',
            bcg: '#ffeeee'
        }
    ]
    return (
        <Wrapper>
            {
                stats.map((item) =>{
                    return <StatItem key={item.title} {...item} />
                })
            }
        </Wrapper>
    )
};

export default StatsContainer;