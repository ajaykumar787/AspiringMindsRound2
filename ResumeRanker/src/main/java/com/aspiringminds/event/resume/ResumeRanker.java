package com.aspiringminds.event.resume;

import java.util.Scanner;

public class ResumeRanker {	
	
	// directory contains the input files
	private static final String INPUT_DIR = "inputFiles";
	
	// directory contains the indexes
    private static final String INDEX_FILES_DIR = "indexedFiles"; 
    
    
	public static void main(String[] args) throws Exception {
				
		ConvertDocToText.convertDocToText();
		
		Scanner sc = new Scanner(System.in);		
		System.out.println("Enter the keywords: ");
		String searchKeywords = sc.nextLine();
		
		ResumeIndexer.createIndexer(INPUT_DIR, INDEX_FILES_DIR);
		ResumeSearcher.searcher(searchKeywords);
	}

}
