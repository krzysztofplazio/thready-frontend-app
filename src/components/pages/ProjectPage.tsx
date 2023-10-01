import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Box, Stack, StackDivider, Heading, Grid, GridItem } from '@chakra-ui/react'
import TitleCard from "./cards/TitleCard";
import { CircleChart } from "../datas/CircleChart";
import ChartCard from "./cards/ChartCard";
import './ProjectPage.scss';
import TableCard from "./cards/TableCard";

const threads = [
    { 
        id: "1",
        name: "wontek first ;pp",
        status: {
            name: "nowy",
            color: "green"
        },
        dueDate: new Date(),
    },
    { 
        id: "2",
        name: "wontek first ;pp",
        status: {
            name: "w trakcie",
            color: "yellow"
        },
        dueDate: new Date(),
    },
    { 
        id: "3",
        name: "wontek first ;pp",
        status: {
            name: "zamknięty",
            color: "blue"
        },
        dueDate: new Date(),
    },
    { 
        id: "4",
        name: "wontek first ;pp",
        status: {
            name: "zamknięty",
            color: "blue"
        },
        dueDate: new Date(),
    },
    { 
        id: "5",
        name: "wontek first ;pp",
        status: {
            name: "nowy",
            color: "green"
        },
        dueDate: new Date(),
    },
    { 
        id: "6",
        name: "wontek first ;pp",
        status: {
            name: "odrzucony",
            color: "red"
        },
        dueDate: new Date(),
    },
]

const users = [
    {
        name: "Krzysztof Płazio",
        login: "plaziok",
    },
    {
        name: "Albert Piekarski",
        login: "piekarskia",
    },
    {
        name: "Adrian Socha",
        login: "sochaa",
    },
    {
        name: "Dawid Matusik",
        login: "matusikd",
    }
]

function ProjectPage() {
    const project = { id: 1, name: 'Project Tracker', status: { name: "nowy", color: "green"} };
    const id = useParams<{ id: string }>();
    return(
        <Grid gap={4}
              templateColumns='repeat(3, 1fr)'
              templateRows='repeat(1, 1fr)'>
            <GridItem w='80%' colSpan={2} >
                <TitleCard text={project.name} id={project.id} />
            </GridItem>
            <GridItem rowSpan={2} w='100%'>
                <ChartCard />
            </GridItem>
            <GridItem colSpan={2}>
                <TableCard text='otwarte wątki' />
            </GridItem>
            <GridItem colSpan={2}>
                <TableCard text='Data zakończenia' />
            </GridItem>
            <GridItem rowSpan={2}>
                <TableCard text='przypisani użytkownicy' />
            </GridItem>
        </Grid>
    )
}

export default ProjectPage;