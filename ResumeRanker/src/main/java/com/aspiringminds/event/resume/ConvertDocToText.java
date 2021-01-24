package com.aspiringminds.event.resume;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Paths;

public class ConvertDocToText {

	// directory contains the doc files
	private static final String DOC_FILES_DIR = "docFiles";

	// directory contains the input files
	private static final String INPUT_DIR = "inputFiles";

	public static void convertDocToText() {

		File dir = new File(Paths.get(DOC_FILES_DIR).toString());
		File[] fileslist = dir.listFiles(new FileFilterer());

		for (File f : fileslist) {
			// ------------------------------------------doc---------------------------------------------//
			if (f.getName().endsWith(".doc")) // && f.getName().equals("Chethan_Kumar_Resume.doc"))
			{
				try (BufferedReader bufferedReader = new BufferedReader(new FileReader(f.getAbsolutePath()))) {
					// FileInputStream fis = new FileInputStream(f.getAbsolutePath());

					// Read the content from file
					StringBuffer fileData = new StringBuffer();

					String line = bufferedReader.readLine();
					while (line != null) {
						// System.out.println(line);
						line = bufferedReader.readLine();
						fileData.append(line);
					}

					writeToFile(f, fileData);

				} catch (FileNotFoundException e) {
					// Exception handling
				} catch (IOException e) {
					// Exception handling
				}

			}
			// ------------------------------------else for pdf---------------------------------------//
			else if (f.getName().endsWith(".pdf")) {

			}
		}
	}

	private static void writeToFile(File f, StringBuffer line) {
		// Write the content in file
		try (BufferedWriter bufferedWriter = new BufferedWriter(
				new FileWriter(Paths.get(INPUT_DIR).toString() + "/" + f.getName() + ".txt"))) {
			bufferedWriter.write(line.toString());
		} catch (IOException e) {
			// Exception handling
		}
		//System.out.println("Writing successful");
	}

	/*
	 * public static void main(String[] args) { convertDocToText(); }
	 */

}
