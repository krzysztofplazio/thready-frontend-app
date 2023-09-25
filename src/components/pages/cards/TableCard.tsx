import { Card, CardBody, Text } from "@chakra-ui/react";
import ProjectTable from "../../datas/ProjectTable";

function TableCard({ text } : { text: string }) {
    return(
        <Card>
            <CardBody>
                <Text fontSize='2xl'
                      sx={{
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                      marginBottom: 3,
                }}>
                    {text ?? "placeholder"}
                </Text>
                <ProjectTable />
            </CardBody>
        </Card>
    );
}

export default TableCard;