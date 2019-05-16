
export const ApiResponse = {
  Error: {
    PayloadIsNull: {
      code: "E000",
      status: 543,
      message: "Payload is null",
      isError: true,
    },
    ValidationError: {
      code: "E001",
      status: 500,
      message: "Validation error",
      isError: true,
    },
    DatabaseError: {
      code: "E002",
      status: 500,
      message: "Database error",
      isError: true,
    },
    TokenExpired: {
      code: "E003",
      status: 498,
      message: "Token expired",
      isError: true,
    },
    UserAlreadyExists: {
      code: "E004",
      status: 297,
      message: "User already exists",
      isError: false,
    },
    DoNotExistsUser: {
      code: "E005",
      status: 298,
      message: "Do not exists user",
      isError: false,
    },
    NoResult: {
      code: "E006",
      status: 200,
      message: "No result",
      isError: false,
    },
  },
  Success: {
    Save: {
      code: "S000",
      status: 200,
      message: "Save",
      isError: false
    },
    Find: {
      code: "S001",
      status: 200,
      message: "Find",
      isError: false
    },
    Modify: {
      code: "S002",
      status: 200,
      message: "Modify",
      isError: false
    },
  }
}