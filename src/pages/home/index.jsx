import {
	useColorMode,
	Box,
	Image,
	Text,
	HStack,
	Button,
	VStack,
  Stack,
  Avatar,
} from "@chakra-ui/react"
import dash from "../../assets/category.png"
import money from "../../assets/money.png"
import user from "../../assets/profile-2user.png"
import setting from "../../assets/setting.png"
import profile from "../../assets/Profile.png"

const Home = () => {
	const { colorMode } = useColorMode()
	const isDarkMode = colorMode !== "light"

	// Define an array for the data and colors
	const data = [
		{
			title: "Total Paid",
			price: `4,120,102`,
			subPrice: 76,
			amount: 1289,
			bgColor: "#B6FDD3",
		},
		{
			title: "Total overdue",
			price: "23,000",
			subPrice: "13",
			amount: 13,
			bgColor: "#FFB7BD",
		},
		{
			title: "Total draft",
			price: "12,200",
			subPrice: "00",
			amount: `08`,
			bgColor: "#D9D9E0",
		},
		{
			title: "Total unpaid",
			amount: `06`,
			price: "87,102",
			subPrice: "00",
			bgColor: "#F8E39B",
		},
	]

  const invoiceData = [
		{
			// date: "27th November, 2022",
			invoiceNumber: "1023494 - 2304",
			dueDate: "May 19th, 2023",
			amount: "$1,311,750.12",
			status: "PAID",
			statusColor: "#129043",
			bgColor: "#E6FFF0",
		},
		{
			// date: "15th October, 2022",
			invoiceNumber: "1023495 - 2305",
			dueDate: "May 19th, 2023",
			amount: "$1,311,750.12",
			status: "OVERDUE",
			statusColor: "#FF6347",
			bgColor: "#FFE4E1",
		},
	]
  const invoiceData2 = [
		{
			// date: "27th November, 2022",
			invoiceNumber: "1023494 - 2304",
			dueDate: "May 19th, 2023",
			amount: "$1,311,750.12",
			status: "DRAFT",
			statusColor: "#373B47",
			bgColor: "#F6F8FA",
		},
		{
			// date: "15th October, 2022",
			invoiceNumber: "1023495 - 2305",
			dueDate: "May 19th, 2023",
			amount: "$1,311,750.12",
			status: "PENDING PAYMENT",
			statusColor: "#D98F00",
			bgColor: "#FFF8EB",
		},
		{
			// date: "5th December, 2022",
			invoiceNumber: "1023494 - 2304 ",
			dueDate: "May 19th, 2023",
			amount: "$1,311,750.12",
			status: "PAID",
			statusColor: "#129043",
			bgColor: "#E6FFF0",
		},
	]


	return (
		<>
			<HStack
				flexDirection={["column", "row"]}
				justifyContent="space-between"
				pr={["10px", "20px"]}
				pl={["1px", "30px"]}
				py={["5px", "5px"]}
				w="100%"
				bg="transparent">
				<Text fontSize="32px" color="#373B47">
					Invoice
				</Text>

				<HStack spacing="15px">
					<Button
						fontSize={["12px", "14px"]}
						borderRadius={["5px", "40px"]}
						h="60px"
						width={["150px", "253px"]}
						justifyContent="center"
						px="15px"
						color={"#697598"}
						_hover={{ background: "#ffffff" }}>
						see what’s new
					</Button>

					<Button
						fontSize={["12px", "14px"]}
						borderRadius={["5px", "40px"]}
						h="60px"
						w={["100px", "253px"]}
						justifyContent="center"
						px="15px"
						color={"#fff"}
						bg="#003EFF"
						_hover={{ background: "#003EFF" }}>
						Create
					</Button>
				</HStack>
			</HStack>

			<HStack
				mt={["10px", "15px"]}
				w="100%"
				spacing="20px"
				justify="space-between"
				flexWrap="wrap">
				{data.map((item, index) => (
					<Box
						key={index}
						minH={["204px"]}
						borderRadius={"24px"}
						p={["10px", "20px"]}
						bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
						w={{ sm: "500px", md: "23%" }}>
						<VStack align="flex-start" spacing="15px">
							{/* Icon at the top */}
							<Image src={dash} />

							{/* Total Paid and Number with Oval Background Side by Side */}
							<HStack spacing="15px">
								<Text
									fontSize="12px"
									fontWeight="bold"
									color={"#697598"}
									whiteSpace="nowrap">
									{item.title}
								</Text>
								<Box
									borderRadius={"24px"}
									w="66px"
									h="41px"
									alignContent={"center"}
									bg={item.bgColor}>
									<Text
										fontSize="14px"
										textAlign={"center"}
										fontWeight="bold"
										color="black">
										{item.amount}
									</Text>
								</Box>
							</HStack>

							{/* Amount Below Total Paid */}
							<Text fontSize="28px" fontWeight="bold">
								${item.price}
								<Text as="span" fontSize="sm" color="gray.500">
									.{item.subPrice}
								</Text>
							</Text>
						</VStack>
					</Box>
				))}
			</HStack>

			<Text fontSize="20px" color="#373B47" my={5}>
				Invoice Actions
			</Text>

			<HStack
				mt={["10px", "15px"]}
				w="100%"
				spacing="20px"
				justify="space-between"
				flexWrap="wrap">
				<Box
					minH={["204px"]}
					borderRadius={"24px"}
					p={["10px", "20px"]}
					bg={isDarkMode ? "navy.1000" : "#003EFF"}
					w={{ sm: "500px", md: "30%" }}>
					<VStack align="flex-start" spacing="15px">
						{/* Icon at the top */}
						<Image src={money} />

						<Text
							fontSize="22px"
							fontWeight="bold"
							color={"#ffffff"}
							whiteSpace="nowrap">
							Create New Invoice
						</Text>

						<Text fontSize="14px" color={"#ffffff"} fontWeight="bold">
							Create new invoices easily
						</Text>
					</VStack>
				</Box>

				<Box
					minH={["204px"]}
					borderRadius={"24px"}
					p={["10px", "20px"]}
					bg={isDarkMode ? "navy.1000" : "#ffffff"}
					w={{ sm: "500px", md: "30%" }}>
					<VStack align="flex-start" spacing="15px">
						{/* Icon at the top */}
						<Image src={setting} />

						<Text
							fontSize="22px"
							fontWeight="bold"
							color={"#373B47"}
							whiteSpace="nowrap">
							Change Invoice settings
						</Text>

						<Text fontSize="14px" color={"#697598"} fontWeight="bold">
							Customise your invoices
						</Text>
					</VStack>
				</Box>
				<Box
					minH={["204px"]}
					borderRadius={"24px"}
					p={["10px", "20px"]}
					bg={isDarkMode ? "navy.1000" : "#ffffff"}
					w={{ sm: "500px", md: "30%" }}>
					<VStack align="flex-start" spacing="15px">
						{/* Icon at the top */}
						<Image src={user} />

						<Text
							fontSize="22px"
							fontWeight="bold"
							color={"#373B47"}
							whiteSpace="nowrap">
							Manage Customer list
						</Text>

						<Text fontSize="14px" color={"#697598"} fontWeight="bold">
							Add and remove customers
						</Text>
					</VStack>
				</Box>
			</HStack>

			<HStack
				mt={["10px", "15px"]}
				w="100%"
				spacing="20px"
				justify="space-between"
				flexWrap="wrap">
				<Box
					minH={["630px"]}
					borderRadius={"24px"}
					p={["10px", "10px"]}
					bg={isDarkMode ? "navy.1000" : "#ffffff"}
					w={{ sm: "500px", md: "55%" }}>
					<HStack justifyContent={"space-between"}>
						<Text fontSize="20px" color="#373B47">
							Recent Invoices
						</Text>

						<Button
							fontSize={["12px", "14px"]}
							borderRadius={["5px", "40px"]}
							h="60px"
							width={["150px", "242px"]}
							justifyContent="center"
							px="15px"
							color={"#003EFF"}
							borderColor="#E3E6EF"
							borderWidth="1px"
							_hover={{ background: "#ffffff" }}>
							View All invoices
						</Button>
					</HStack>
					<Text fontSize="12px" color="#1F1F23" mt={5}>
						today - 27th November, 2022
					</Text>
					{invoiceData.map((invoice, index) => (
						<Box key={index} mt={5}>
							<HStack justifyContent={"space-between"} mx={5}>
								<Stack>
									<Text fontSize={"14px"} fontWeight={"bold"}>
										Invoice - <br />
										{invoice.invoiceNumber}
									</Text>
								</Stack>
								<Stack>
									<Text fontSize={"14px"} color={"#666F77"} fontWeight={"bold"}>
										Due date <br />
										{invoice.dueDate}
									</Text>
								</Stack>
								<Stack>
									<Text fontSize={"14px"} fontWeight={"bold"}>
										{invoice.amount} <br />
										<Box
											borderRadius={"24px"}
											w="66px"
											h="41px"
											alignContent={"center"}
											bg={invoice.bgColor}>
											<Text
												fontSize="12px"
												textAlign={"center"}
												color={invoice.statusColor}>
												{invoice.status}
											</Text>
										</Box>
									</Text>
								</Stack>
							</HStack>
						</Box>
					))}
					<Text fontSize="12px" color="#1F1F23" mt={5}>
						8th december, 2022
					</Text>
					{invoiceData2.map((invoice, index) => (
						<Box key={index} mt={5}>
							<HStack justifyContent={"space-between"} mx={5}>
								<Stack>
									<Text fontSize={"14px"} fontWeight={"bold"}>
										Invoice - <br />
										{invoice.invoiceNumber}
									</Text>
								</Stack>
								<Stack>
									<Text fontSize={"14px"} color={"#666F77"} fontWeight={"bold"}>
										Due date <br />
										{invoice.dueDate}
									</Text>
								</Stack>
								<Stack>
									<Text fontSize={"14px"} fontWeight={"bold"}>
										{invoice.amount} <br />
										<Box
											borderRadius={"24px"}
											// w="70px"
											h="41px"
											alignContent={"center"}
											bg={invoice.bgColor}>
											<Text
												fontSize="12px"
												textAlign={"center"}
												// px={5}
												color={invoice.statusColor}>
												{invoice.status}
											</Text>
										</Box>
									</Text>
								</Stack>
							</HStack>
						</Box>
					))}
				</Box>
				<Box
					// key={index}
					minH={["630px"]}
					borderRadius={"24px"}
					p={["10px", "20px"]}
					bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
					w={{ sm: "500px", md: "40%" }}>
					<HStack justifyContent={"space-between"}>
						<Text fontSize="20px" color="#373B47">
							Recent Activities
						</Text>

						<Button
							fontSize={["12px", "14px"]}
							borderRadius={["5px", "40px"]}
							h="60px"
							width={["90px", "112px"]}
							justifyContent="center"
							px="15px"
							color={"#003EFF"}
							borderColor="#E3E6EF"
							borderWidth="1px"
							_hover={{ background: "#ffffff" }}>
							View All
						</Button>
					</HStack>
					<HStack spacing={5} alignItems="flex-start">
						<Avatar
							size="md"
							bg="#003EFF"
							color="secondaryGray.1000"
							name="K O"
							src={profile}
						/>

						<Stack spacing={2}>
							<Text fontSize="14px" fontWeight="bold">
								Invoice Create
							</Text>

							<Text fontSize="14px" color="#697598" fontWeight="bold">
								Yesterday, 12:05 PM
							</Text>

							<Box
								bg="#F6F8FA"
								w="303px"
								h="76px"
								borderRadius="16px"
								p={3}
								display="flex"
								justifyContent="center"
								alignItems="center">
								<Text fontSize="14px" textAlign="center">
									Created invoice <b>00239434/Olaniyi Ojo Adewale</b>
								</Text>
							</Box>
						</Stack>
					</HStack>
					<HStack spacing={5} alignItems="flex-start">
						<Avatar
							size="md"
							bg="#003EFF"
							color="secondaryGray.1000"
							name="K O"
							src={profile}
						/>

						<Stack spacing={2}>
							<Text fontSize="14px" fontWeight="bold">
								Invoice Create
							</Text>

							<Text fontSize="14px" color="#697598" fontWeight="bold">
								Yesterday, 12:05 PM
							</Text>

							<Box
								bg="#F6F8FA"
								w="303px"
								h="76px"
								borderRadius="16px"
								p={3}
								display="flex"
								justifyContent="center"
								alignItems="center">
								<Text fontSize="14px" textAlign="center">
									Created invoice <b>00239434/Olaniyi Ojo Adewale</b>
								</Text>
							</Box>
						</Stack>
					</HStack>
					<HStack spacing={5} alignItems="flex-start">
						<Avatar
							size="md"
							bg="#003EFF"
							color="secondaryGray.1000"
							name="K O"
							src={profile}
						/>

						<Stack spacing={2}>
							<Text fontSize="14px" fontWeight="bold">
								Invoice Create
							</Text>

							<Text fontSize="14px" color="#697598" fontWeight="bold">
								Yesterday, 12:05 PM
							</Text>

							<Box
								bg="#F6F8FA"
								w="303px"
								h="76px"
								borderRadius="16px"
								p={3}
								display="flex"
								justifyContent="center"
								alignItems="center">
								<Text fontSize="14px" textAlign="center">
									Created invoice <b>00239434/Olaniyi Ojo Adewale</b>
								</Text>
							</Box>
						</Stack>
					</HStack>
					<HStack spacing={5} alignItems="flex-start">
						<Avatar
							size="md"
							bg="#003EFF"
							color="secondaryGray.1000"
							name="K O"
							src={profile}
						/>

						<Stack spacing={2}>
							<Text fontSize="14px" fontWeight="bold">
								Invoice Create
							</Text>

							<Text fontSize="14px" color="#697598" fontWeight="bold">
								Yesterday, 12:05 PM
							</Text>

							<Box
								bg="#F6F8FA"
								w="303px"
								h="76px"
								borderRadius="16px"
								p={3}
								display="flex"
								justifyContent="center"
								alignItems="center">
								<Text fontSize="14px" textAlign="center">
									Created invoice <b>00239434/Olaniyi Ojo Adewale</b>
								</Text>
							</Box>
						</Stack>
					</HStack>
				</Box>
			</HStack>
		</>
	)
}

export default Home

// import {
//   useColorMode,
//   Heading,
//   Box,
//   Flex,
//   Image,
//   Text,
//   HStack,
//   Button,
// } from "@chakra-ui/react";

// const Home = () => {
//   const { colorMode } = useColorMode();
//   const isDarkMode = colorMode !== "light";
//   return (
// 		<>
// 			<HStack
// 				justifyContent="space-between"
// 				pr={["10px", "20px"]}
// 				pl={["1px", "30px"]}
// 				py={["5px", "5px"]}
// 				w="100%"
// 				bg="transparent">
// 				<Text fontSize="32px" color="#373B47">
// 					Invoice
// 				</Text>

// 				<HStack spacing="15px">
// 					<HStack>
// 						<Button
// 							fontSize={["12px", "14px"]}
// 							borderRadius={["5px", "14pxx"]}
// 							h="68px"
// 							w="253px"
// 							justifyContent="center"
// 							px="15px"
// 							color={"#697598"}>
// 							see what’s new
// 						</Button>
// 					</HStack>

// 					<HStack
// 						bg={isDarkMode ? "navy.1000" : "white"}
// 						borderRadius={["5px", "20px"]}
// 						h="50px"
// 						w="auto"
// 						justifyContent="center"
// 						px="15px"></HStack>
// 				</HStack>
// 			</HStack>
// 			{/* <Box
//         mt={["10px", "15px"]}
//         minH={["250px"]}
//         borderRadius={"20px"}
//         textAlign={"center"}
//         p={["10px", "20px"]}
//         bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
//         w={{ sm: "100$", md: "20%" }}
//       ></Box>
//       <Box
//         mt={["10px", "15px"]}
//         minH={["250px"]}
//         borderRadius={"20px"}
//         textAlign={"center"}
//         p={["10px", "20px"]}
//         bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
//         w={{ sm: "100$", md: "20%" }}
//       ></Box>
//       <Box
//         mt={["10px", "15px"]}
//         minH={["250px"]}
//         borderRadius={"20px"}
//         textAlign={"center"}
//         p={["10px", "20px"]}
//         bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
//         w={{ sm: "100$", md: "20%" }}
//       ></Box> */}
// 		</>
// 	)
// };

// export default Home;
