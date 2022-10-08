import styled from 'styled-components';

interface EventSummaryProps {
    title: string;
}

const SummarySection = styled.div`
    width: 100%;
    height: 30vh;
    background-image: linear-gradient(to bottom left, #008b79, #1180a1);
    h1 {
        margin: 0;
        padding-top: 3rem;
        font-size: 2rem;
        text-align: center;
        text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        color: white;
        @media (min-width: 768px) {
            font-size: 5rem;
        }
    }
`;

function EventSummary({ title }: EventSummaryProps) {
    return (
        <SummarySection>
            <h1>{title}</h1>
        </SummarySection>
    );
}

export default EventSummary;
