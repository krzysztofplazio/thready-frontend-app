import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Box, Stack, StackDivider, Heading, Grid, GridItem } from '@chakra-ui/react'
import TitleCard from "./TitleCard";
import { CircleChart } from "../datas/CircleChart";
import ChartCard from "./ChartCard";
import './ProjectPage.scss';

const threads = [
    { 
        id: "1",
        name: "wontek first ;pp",
        status: {
            name: "new",
            color: "green"
        },
        dueDate: new Date(),
    },
    { 
        id: "2",
        name: "wontek first ;pp",
        status: {
            name: "in progress",
            color: "yellow"
        },
        dueDate: new Date(),
    },
    { 
        id: "3",
        name: "wontek first ;pp",
        status: {
            name: "close",
            color: "blue"
        },
        dueDate: new Date(),
    },
    { 
        id: "4",
        name: "wontek first ;pp",
        status: {
            name: "close",
            color: "blue"
        },
        dueDate: new Date(),
    },
    { 
        id: "5",
        name: "wontek first ;pp",
        status: {
            name: "new",
            color: "green"
        },
        dueDate: new Date(),
    },
    { 
        id: "6",
        name: "wontek first ;pp",
        status: {
            name: "rejected",
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
    const project = { id: 1, name: 'Project Tracker', status: { name: "new", color: "green"} };
    const id = useParams<{ id: string }>();
    return(
        <Grid templateRows='repeat(3, 1fr)'
              templateColumns='repeat(2, 1fr)'>
            <GridItem w='70%'>
                <TitleCard text={project.name} id={project.id} />
            </GridItem>
            <GridItem rowSpan={2} w='30%'>
                <ChartCard />
            </GridItem>
        </Grid>
    )
}

export default ProjectPage;