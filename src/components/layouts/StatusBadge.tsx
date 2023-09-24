import { Badge } from "@chakra-ui/react";

function StatusBadge({ name, color }: IStatus) {
    return <Badge variant='solid' colorScheme={color}>{name}</Badge>;
}

export default StatusBadge;