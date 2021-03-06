module.exports = [
  {
    file: '2015 edition products (xml)',
    definitionFileName: 'listingSchema.xsd',
    dataFileName: 'chpl-2015',
    fileExtension: 'xml',
    definitionFileSize: 95,
    dataFileSize: 400000,
    generationFrequencyInDays: 1,
  },
  {
    file: '2014 edition products (xml)',
    definitionFileName: 'listingSchema.xsd',
    dataFileName: 'chpl-2014',
    fileExtension: 'xml',
    definitionFileSize: 95,
    dataFileSize: 570000,
    generationFrequencyInDays: 92,
  },
  {
    file: '2011 edition products (xml)',
    definitionFileName: 'listingSchema.xsd',
    dataFileName: 'chpl-2011',
    fileExtension: 'xml',
    definitionFileSize: 95,
    dataFileSize: 190000,
    generationFrequencyInDays: 92,
  },
  {
    file: '2015 edition summary (csv)',
    definitionFileName: '2015 Listing CSV Data Dictionary.csv',
    dataFileName: 'chpl-2015',
    fileExtension: 'csv',
    definitionFileSize: 14,
    dataFileSize: 900,
    generationFrequencyInDays: 1,
    definitionFileLines: 100,
    dataLines: 1300,
  },
  {
    file: '2014 edition summary (csv)',
    definitionFileName: '2014 Listing CSV Data Dictionary.csv',
    dataFileName: 'chpl-2014',
    fileExtension: 'csv',
    definitionFileSize: 9,
    dataFileSize: 3100,
    generationFrequencyInDays: 92,
    definitionFileLines: 85,
    dataLines: 5250,
  },
  {
    file: 'Surveillance Activity',
    definitionFileName: 'Surveillance and Nonconformity CSV Data Dictionary.csv',
    dataFileName: 'surveillance-all',
    fileExtension: 'csv',
    definitionFileSize: 7,
    dataFileSize: 900,
    generationFrequencyInDays: 1,
    definitionFileLines: 30,
    dataLines: 1700,
  },
  {
    file: 'Surveillance Non-Conformities',
    definitionFileName: 'Surveillance and Nonconformity CSV Data Dictionary.csv',
    dataFileName: 'surveillance-with-nonconformities',
    fileExtension: 'csv',
    definitionFileSize: 7,
    dataFileSize: 800,
    generationFrequencyInDays: 1,
    definitionFileLines: 30,
    dataLines: 1200,
  },
  {
    file: 'Direct Review Activity',
    definitionFileName: 'Direct Review CSV Data Dictionary.csv',
    dataFileName: 'direct-reviews',
    fileExtension: 'csv',
    definitionFileSize: 3,
    dataFileSize: 1,
    generationFrequencyInDays: 1,
    definitionFileLines: 20,
    dataLines: 1,
  },
];
