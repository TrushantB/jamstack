import React from 'react';
import { Box, Card, Inline, Grid, Label, Text, ThemeProvider, studioTheme } from '@sanity/ui';

const Table = ({ rows }) => {
    const numCols = rows.length === 0 ? 0 : rows[0].cells.length;

    return (
        <Grid columns={numCols} padding={2}>
            {rows.map((row, index) =>
                row.cells.map((cell, i) => (
                    <Card
                        key={row._key + i}
                        padding={2}
                        style={{ outline: '1px solid #DFE2E9' }}
                    >
                        <Text style={index === 0 ? { fontWeight: 'bold' } : { textOverflow: 'elipsis' }}>{cell}</Text>
                    </Card>
                ))
            )}
        </Grid>
    );
};

const TablePreview = (props) => {
    const { schemaType } = props;
    const { rows = [], title } = props ?? {
        title: 'Title missing',
    };

    return (
        <ThemeProvider theme={studioTheme}>
            <Box padding={3}>
                <Inline space={3}>
                    <Card>
                        <Text>{schemaType?.title ?? title}</Text>
                    </Card>
                </Inline>
            </Box>
            <Box padding={2}>
                {rows.length === 0 ? (
                    <Label muted>Empty Table</Label>
                ) : (
                    <Table rows={rows} />
                )}
            </Box>
        </ThemeProvider>
    );
};

export default TablePreview;