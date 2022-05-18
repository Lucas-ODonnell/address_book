const defaultAddress = [
  {
    id: 1,
    name: "Vojta Montgomery",
    address: "9681 John Ave.",
    email: "vojta@gmail.com",
    phone: "(255) 984-1736",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 2,
    name: "Barbara Durante",
    address: "570 Pulaski Street",
    email: "barbara@gmail.com",
    phone: "(725) 639-8866",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 3,
    name: "Narayana Sherburn",
    address: "47 Greenrose St.",
    email: "narayana@gmail.com",
    phone: "(444) 973-0180",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 4,
    name: "Besarion Das",
    address: "9177 Bow Ridge Rd.",
    email: "besarion@gmail.com",
    phone: "(799) 582-4702",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 5,
    name: "Annabelle Åkesson",
    address: "217 W. Glen Creek Ave.",
    email: "annabelle@gmail.com",
    phone: "(536) 698-5978",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 6,
    name: "Diocletianus Mas",
    address: "678 Wintergreen Lane",
    email: "diocletianus@gmail.com",
    phone: "(400) 312-0077",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 7,
    name: "Pyry Schröder",
    address: "525 Ocean Road",
    email: "pyry@gmail.com",
    phone: "(531) 336-4046",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 8,
    name: "Phil Schröder",
    address: "56 East Constitution Street",
    email: "phil@gmail.com",
    phone: "(960) 419-9296",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 9,
    name: "Radoslav Hughes",
    address: "26 Sutor Road",
    email: "radoslav@gmail.com",
    phone: "(755) 400-7109",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 10,
    name: "Irma Knaggs",
    address: "799 N. Winchester Road",
    email: "irma@gmail.com",
    phone: "(494) 530-9178",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 11,
    name: "Yua Mori",
    address: "1 Hillcrest St.",
    email: "yua@gmail.com",
    phone: "(204) 836-2236",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 12,
    name: "Ryō Yamazaki",
    address: "912 Brewery St.",
    email: "ryo@gmail.com",
    phone: "(484) 362-5214",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 13,
    name: "Minato Taniguchi",
    address: "684 West Grove Dr.",
    email: "minato@gmail.com",
    phone: "(641) 507-8663",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 14,
    name: "Yūto Kuroda",
    address: "55 Foster Court",
    email: "yuto@gmail.com",
    phone: "(994) 781-5459",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
  {
    id: 15,
    name: "Takehiko Nagasawa",
    address: "603 Valley View Lane",
    email: "takehiko@gmail.com",
    phone: "(739) 990-7296",
    notes:
      "Maecenas lacinia lorem vel orci aliquam blandit. Nunc condimentum consectetur nulla, sed congue urna efficitur ut. Etiam non ligula ut mi tempor auctor quis a purus. Phasellus egestas lectus sed pharetra tempus.",
  },
];

export default defaultAddress;
