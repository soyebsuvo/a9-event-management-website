import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function ManageService({ service, refetch }) {
    const handleDelete = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/service/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })



    }

    return (
        <div className="px-8">
            <Card className="flex-col-reverse md:flex-row-reverse" sx={{ display: 'flex', my: '20px', justifyContent: 'left', p: '8px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 1 auto 1' }}>
                        <Typography component="div" variant="h4">
                            {service?.service_name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" component="div">
                            Price : ${service?.price}
                        </Typography>
                        {service?.details?.length > 100 ?
                            <Typography color='text.secondary' variant="subtitle1">
                                {service?.details.slice(0, 100)}
                            </Typography> :
                            <Typography variant="subtitle1">
                                {service?.details}
                            </Typography>
                        }

                        <div className="flex justify-end gap-3">
                            <Link to={`/dashboard/manage-service/update-service/${service?._id}`}><UpdateButton variant="outlined">Update</UpdateButton></Link>
                            <DeleteButton onClick={() => handleDelete(service?._id)} variant="contained">Delete</DeleteButton>
                        </div>

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">

                        </IconButton>
                        <IconButton aria-label="play/pause">

                        </IconButton>
                        <IconButton aria-label="next">

                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '220px' }}
                    image={service?.imageURL}
                    alt="Live from space album cover"
                />
            </Card>
        </div>
    )
}
ManageService.propTypes = {
    service: PropTypes.object,
    refetch: PropTypes.func
}